/*
 * GET home page.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var labs = require('/labs.json');

exports.view = function(req, res){
  if(labs.length < 9) {
  	var todaysLab = [{
		"id": "lab-9",
		"title": "Debugging 101",
		"date": "March 7",
		"image": "debug.png"
	}];

  	labs.push(todaysLab);
  }

  res.render('index', {
	'labs': labs
  });
};
