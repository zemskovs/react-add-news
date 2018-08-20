import React from 'react'
import PropTypes from 'prop-types'
import {Article} from './Article'

class News extends React.Component {

    // componentWillReceiveProps(nextProps){
    //     let nextFilteredNews = [...nextProps.data]

    //     nextFilteredNews.forEach((item, index) => {
    //       if (item.bigText.toLowerCase().indexOf('pubg') !== -1 ){
    //         item.bigText = 'СПАМ'
    //       }
    //     })

    //     this.setState({ filteredNews: nextFilteredNews })
    // }
    
  
    renderNews = () => {
      const { data } = this.props
      let newsTemplate = null
      
      if (data.length) {
        newsTemplate = data.map(function(item) {
          return <Article key={item.id} data={item}/>
        })
      } else {
        newsTemplate = <p>К сожалению новостей нет</p>
      }
      
      return newsTemplate
    }
    render() {
      const { data } = this.props
      return (
        <div className="news">
          {this.renderNews()}
          {
            data.length ? <strong className={'news__count'}>Всего новостей: {data.length}</strong> : null
          }
          
        </div>
      );
    }
  }
    News.propTypes = {
      data: PropTypes.array.isRequired 
    }

    export {News}