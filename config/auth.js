module.exports = {
  default: function isAdmin(req, res, next) {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: 'You must have admin permissions.' });
  } else {
    // If the user is an admin, pass the request along to the next middleware function
    next();
  }
}
};


// const isAdmin = async (req, res, next) => {
//     if (req.headers && req.headers.authorization) {
//       if (!req.user || !req.user.isAdmin) {
//         return res.status(403).json({ message: 'You must have admin permissions.' });
//       }
//       // If we get here, we're good so pass it along
//       next();
//     } else {
//       const err = new Error('No auth headers set. You must have admin permissions.');
//       // Pass the error to error handling middleware functions
//       next(err);
//     }
//   };

