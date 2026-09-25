const subscribers = {
  "test1": "test1",
  "basil": "512",
  "ahmad": "1234",
  "zinar100": "100",
};

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const u = (req.query.user||'').trim();
  const p = (req.query.pass||'').trim();

  // فحص + تسجيل
  if (subscribers[u] && subscribers[u] === p) {
    console.log(`LOGIN SUCCESS: ${u} at ${new Date().toISOString()}`);
    return res.status(200).send('OK');
  }
  return res.status(200).send('NO');
}
