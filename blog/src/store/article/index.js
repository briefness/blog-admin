import { action, computed, observable } from 'mobx';
import { axios, store } from 'choerodon-front-boot';

@store('ArticleInfoStore')
class ArticleInfoStore {
  @observable articleInfo = {};

  @computed
  get getArticleInfo() {
    return this.articleInfo;
  }

  @action
  setArticleInfo(data) {
    this.articleInfo = data;
  }

	// 博客信息维护
  loadArticleInfo = () => {
    return axios.get('/get_blogList').then((data) => {
      if (data) {
        this.setArticleInfo(data);
      }
    });
  };

}

export default new ArticleInfoStore();
