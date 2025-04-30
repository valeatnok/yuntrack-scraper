export default function handler(req, res) {
  const trackingId = req.query.id;

  if (!trackingId) {
    return res.status(400).json({ error: 'Missing tracking ID' });
  }

  return res.status(200).json({
    message: `YunExpress ID received: ${trackingId}`,
  });
}
