const subscribers = {
  "test1": "test1",
  "basil": "512",
  "ahmad": "1234",
  "zinar100": "100",
  "zinar200": "200",
  "zinar500": "500"
};

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const u = (req.query.user||'').trim();
  const p = (req.query.pass||'').trim();

  // فحص
  if (subscribers[u] && subscribers[u] === p) {
    console.log(`LOGIN SUCCESS: ${u}`);
    return res.status(200).send('OK');
  } else {
    return res.status(401).send('FAIL');
  }
}
