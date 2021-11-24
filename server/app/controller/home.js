'use strict';
const path = require('path');
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    await this.ctx.render(path.resolve(__dirname, '../public/web/index.html'));
  }
}

module.exports = HomeController;
