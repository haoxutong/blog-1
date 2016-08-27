/**
 * Created by jack on 16-8-22.
 */

import Data from '../data';
import * as DataService from '../common/DataService';
import PostService from './PostService';

class TagService {
	constructor() {}

	getTagByName(name = '') {
		return Object.values(Data.tags).filter(tag => tag.name === name)[0] || {};
	}

	queryTags(){
		return Object.values(Data.tags).sort(DataService.sortFn(object => PostService.queryPostsListByTagName(object.name).length));
	}

	queryTagsByPostId(postId = 1) {
		return PostService.getPostById(postId).tags.map(name => this.getTagByName(name));
	}
}

export default new TagService();