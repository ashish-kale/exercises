

function Middleware() {
  this.tasks = [];
}

Middleware.prototype.run = function () {
  let t = this.tasks;

  if (t.length > 0) {
    let task = t.shift();
    task.call(this, this.run.bind(this));
  }
  else
    this.cb();
}

Middleware.prototype.use = function (task) {
  this.tasks.push(task);
}


Middleware.prototype.go = function (cb) {
  this.cb = cb;
  this.run();
}




module.exports = Middleware;