module.exports = {
  name: 'my-addon',
  included: function ( /* app */ ) {
    this._super.included.apply(this, arguments);
  }
};