export default function handler(req, res) {
  console.log(process.env.SS_TWO)
  console.log(process.env.NEXT_PUBLIC_SS_THREE)
  res.status(200).json({ name: 'John Doe' })
}