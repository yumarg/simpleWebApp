/**
 * GET /
 * Dashboard page.
 */
exports.index = function(req, res) {
  res.render('dashboard', {
    title: 'Dashboard'
  });
};