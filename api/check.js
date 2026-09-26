const cards = {
  "basil": "512", // المستخدم basil الباسورد 512
  "ahmad": "1234", // مختلفين
  "user1": "pass99", // مختلفين
  "zinar1": "zinar1", // نفس الشي بيصير كمان
};

export default function handler(req, res){
  const {user, pass} = req.query;
  if(cards[user] && cards[user] == pass){
    return res.status(200).send("OK");
  } else {
    return res.status(200).send("FAIL");
  }
}
