function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  let _this = this;
  this.http.onload = function () {
    if (_this.http.status === 200) {
      callback(null, JSON.parse(_this.http.responseText));
    } else {
      callback('Error: ' + _this.http.status);
    }
  };

  this.http.send();
};

// Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let _this = this;
  this.http.onload = function () {
    callback(null, JSON.parse(_this.http.responseText));
  };

  this.http.send(JSON.stringify(data)); // -> send data as json string
};

// Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let _this = this;
  this.http.onload = function () {
    callback(null, JSON.parse(_this.http.responseText));
  };

  this.http.send(JSON.stringify(data)); // -> send data as json string
};

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);
  let _this = this;
  this.http.onload = function () {
    if (_this.http.status === 200) {
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + _this.http.status);
    }
  };

  this.http.send();
};
