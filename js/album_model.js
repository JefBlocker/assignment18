import Backbone from 'backbone';

let AlbumModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/assignment18',

  idAttribute: 'objectId'

});


export default AlbumModel;