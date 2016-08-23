import path from 'path';

export default function bundle (devport) {

  return (req, res) => {
    if (devport) res.redirect(`//localhost:${devport}${req.route.path}`);
    else res.sendFile(req.route.path, { root: path.join(__dirname, '../') });
  }
}
