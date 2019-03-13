import React, { Component } from 'react';
import { Button, Skeleton, Icon } from 'antd';
import './index.scss'

const articles = [
  {
    id: "1",
    userName: '用户名',
    publishTime: '05.08 08:45',
    blogTitle: '文章标题',
    blogContent: '限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示这里是文章的内容，限制显示字数，超出部分显示...',
    relatedImg: 'http://upload-images.jianshu.io/upload_images/4810847-84c483151ca77460.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    pageView: 1000,
    reply: 10000,
    like: 10
  }
];
class Home extends Component {
  state = {
    loading: true,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);

  }
  editorArticle() {
    this.props.history.push('/release');
  }
  render() {
    const { loading } = this.state;
    return (
      <div className="article-list">
			   <ul>
         {articles.map((article) =>
           <li  className="article-list__cell" key={article.id}>
             <Skeleton loading={loading} active>
               <div className="flex">
                 <div className="article-content pr20">
                   <h1 className="f22 lh40 mb10 rel">
                   {article.blogTitle}
                     <div className="article-action">
                       <Button className="mr10" type="primary" shape="circle" icon="form" onClick={this.editorArticle.bind(this)} />
                       <Button type="primary" shape="circle" icon="close" />
                     </div>
                   </h1>
                   <p className="f14 over-text article-content__content">{article.blogContent}</p>
                   <p className="pt14 lh14">
                    <Icon type="eye" theme="filled" /><span className="pl4 pr10">{article.pageView}</span>
                    <Icon type="like" theme="filled" /><span className="pl4 pr10">{article.like}</span>
                    <Icon type="message" theme="filled" /><span className="pl4">{article.reply}</span>
                   </p>
                 </div>
                 {
                   !article.relatedImg ? null :
                   <div className="article-img">
                     <img src={article.relatedImg} alt="test" width="150px" height="120px" />
                   </div>
                 }
               </div>
             </Skeleton>
           </li>
         )}
         </ul>
      </div>

    );
  }
}

export default Home;
