import { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import { Button, Container } from "ui"
import { HomeLayout } from "../components"

const Home: NextPage = () => {
  const [text, setText] = useState("")
  const [kadyrovshina, setKadyrovshina] = useState([])
  useEffect(() => {
    const textArr = text.split(" ")
    const randIndexes = Array.from(
      new Set(Array.from({ length: textArr.length }, () => Math.floor(Math.random() * textArr.length)))
    )
    randIndexes.forEach((index) => {
      textArr.splice(index, 0, "дон")
    })
    setKadyrovshina(textArr)
  }, [text])
  return (
    <HomeLayout>
      <Head>
        <title>Любой текст в кадыровщину</title>
      </Head>
      <Container>
        <h1 className="text-xl">Любой текст в кадыровщину</h1>
        <div className="grid grid-cols-2 gap-4">
          <textarea
            className="border rounded p-4"
            name="simpletext"
            id="simpletext"
            cols={100}
            rows={30}
            onChange={(e) => setText(e.target.value)}
          >
            {text}
          </textarea>
          <div className="p-4">{kadyrovshina.join(" ")}</div>
        </div>
      </Container>
    </HomeLayout>
  )
}

export default Home
