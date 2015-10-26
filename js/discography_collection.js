import Backbone from 'backbone';
import AlbumModel from './album_model';

let DiscographyCollection = Backbone.Collection.extend({
  
  url: 'https://api.parse.com/1/classes/assignment18',

  model: AlbumModel,

  parse: function(data) {
    return data.results;
  }

});

export default DiscographyCollection;