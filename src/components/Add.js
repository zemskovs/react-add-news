import React from 'react'
import PropTypes from 'prop-types'

class Add extends React.Component{   
    state={
      author:'',
      text:'',
      bigText:'',
      check: false,
      id: + new Date(),
    } 
    onBtnClickHandler = (e) =>{
      e.preventDefault()
      const { author, text, bigText, id } = this.state
      this.props.onAddNews({ author, text, bigText, id })
    }        
    handleChange = (e) =>{
      const { id, value } = e.currentTarget
      this.setState({ [id]: value })
    }
    
    hanleCheck = (e) =>{
        this.setState({check: e.currentTarget.checked})
    }
    validate = () =>{
      const { author, text, check, bigText } = this.state
      if (author.trim() && text.trim() && check && bigText.trim() ){
        return true
      }
      return false
    }
  
    render(){
      const { author, text, bigText } = this.state
      return (
        <form className='add'>
          <input
            id='author'
            type='text'
            className='add__author'
            placeholder='Ваше имя'
            value={author}
            onChange = {this.handleChange}
          />
          <textarea
            id='text'
            className='add__text'
            placeholder='Текст новости'
            value={text}
            onChange = {this.handleChange}
          ></textarea>
          <textarea
            id='bigText'
            className='add__text'
            placeholder='Подробнее о новости'
            value={bigText}
            onChange = {this.handleChange}
          ></textarea>
          <label className='add__checkrule'>
            <input 
            type='checkbox' 
            onChange={this.hanleCheck} /> Я согласен с правилами
          </label>
          <button
            className='add__btn'
            onClick={this.onBtnClickHandler}
            disabled={!this.validate()} >
            Добавить новость
            
          </button>              
        </form>
      )
    }
  }
  
  Add.propTypes={
    onAddNews: PropTypes.func.isRequired,
  }

  export {Add}