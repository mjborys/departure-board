import React from 'react';
import ReactDOM from 'react-dom';
import {FormatDate,FormatLateness} from './utils'
import * as assert from 'assert';

it('hides lateness less than 60 seconds', () => {
 	var lateness = 10;
	var formattedLateness = FormatLateness(lateness);
 	assert.equal(formattedLateness, '', 'lateness under a minute should be empty')
});

it('formats 100 seconds as 1 minute', () => {
	var lateness = 100;
  	var formattedLateness = FormatLateness(lateness);
  assert.equal(formattedLateness, '1 min', 'lateness of 100 seconds should be formatted as 1 minute')
});

it('formats 300 seconds as 5 minutes', () => {
	var lateness = 300;
  	var formattedLateness = FormatLateness(lateness);
  	assert.equal(formattedLateness, '5 min', 'lateness of 500 seconds should be formatted as 5 minutes')
});

it('formats 5000 seconds as over an hour', () => {
  	var lateness = 5000;
  	var formattedLateness = FormatLateness(lateness);
  	assert.equal(formattedLateness, '1hr +', 'lateness of 5000 seconds should be formatted as over an hour')
});

it('formats date with fewer than 10 seconds using two digits', () => {
  	var lateness = 300;
	var formattedLateness = FormatLateness(lateness);
  	assert.equal(formattedLateness, '5 min', 'lateness of 500 seconds should be formatted as 5 minutes')
});

it('formats date with < 10 minutes with two digits', () => {
	var formattedDate = FormatDate(1524611040); // 4/24/2018 19:04
  	assert.equal(formattedDate, '19:04', 'minutes padded with 0')
});

it('formats date with < 10 hours with two digits', () => {
	var formattedDate = FormatDate(1525513050); // 5/5/2018 05:37
  	assert.equal(formattedDate, '05:37', 'hours padded with 0')
});

it('formats date with < 10 hours and 00 minutes with two digits', () => {
	var formattedDate = FormatDate(1523610020); // 4/13/2018 05:00
  	assert.equal(formattedDate, '05:00', 'hours padded with 0, minutes formatted as 00')
});