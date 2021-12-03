var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../data/database.db');
db.serialize(function() {
db.run('CREATE TABLE User(username TEXT PRIMARY KEY,password text,email text,lockedout boolean,currency DOUBLE);Create table Ticker(ticker text,exchange text,PRIMARY key (ticker, exchange));create table Owned(username TEXT,ticker TEXT,numshares int,PRIMARY KEY (username,ticker),FOREIGN key (username) REFERENCES User,FOREIGN key (ticker) REFERENCES Ticker);create table Portfolio(username TEXT,ticker TEXT,numshares int,PRIMARY KEY (username,ticker),FOREIGN key (username) REFERENCES User,FOREIGN key (ticker) REFERENCES Ticker);create table Sale (username text,ticker text,day text,hour text,boughtsold int,PRIMARY key (ticker,day,hour,username),FOREIGN key (username) REFERENCES User,FOREIGN key (ticker) REFERENCES Ticker);create table Pricing(ticker TEXT PRIMARY KEY,day text,openprice double,closeprice double,FOREIGN key (ticker) REFERENCES Ticker);create table Return(ticker text PRIMARY key,day text,return text,FOREIGN key (ticker) REFERENCES Ticker);');
})
db.close();
