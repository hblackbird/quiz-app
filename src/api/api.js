import axios from "axios";
export const api = async (zorluk,sayi) => {
  const cevaplariKaristir = (array) =>{
    return [...array].sort(() => Math.random() - 0.5);
  }
  const data = await axios.get(`https://opentdb.com/api.php?amount=${sayi}&difficulty=${zorluk}&type=multiple`)
  return data.data.results?.map((d)=>({
    ...d,
    answers: cevaplariKaristir([...d.incorrect_answers, d.correct_answer])
  }))
}
