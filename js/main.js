import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

const APP_ID = 'oIHyneMBUAhqcNQ5Sj9rSPfB4tTx25Nv8LMXTdhV';
const API_KEY = '4JaWLXckgVvPtHLT5qOGVf6AaF9589sDHof2pgBs';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});

import DiscographyCollection from './discography_collection';
import AlbumTemplate from './album_template';

let discography = new DiscographyCollection();


function renderDiscography() {
  // Creating an empty dom node
  let $ul = $('<ul></ul>');
  
  // iterate each of the models
  album.each(function(album){
    
    // album is an instance of AlbumModel

    // grab raw data from album model
    let data = album.toJSON();
    console.log('data', data);
    
    // pass the data to our template
    let templateString = AlbumTemplate(data);
    console.log('templateString', templateString);

    // use templateString to create an li dom node
    let $li = $(templateString);

    // append li to the ul
    $ul.append($li);
  });

  // set ul to the body
  $('body').html($ul);
}

album.fetch().then(renderDiscography);

console.log('Hello, World');