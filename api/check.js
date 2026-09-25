export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { user, pass, username, password } = req.query;
  const u = user || username;
  const p = pass || password;

  // للتجربة حالياً
  if (u === 'test1' && p === 'test1') {
    return res.status(200).send('OK');
  }
  
  // هون بعدين بتربطو مع الداتا بيز تبعك
  return res.status(200).send('NO');
}
