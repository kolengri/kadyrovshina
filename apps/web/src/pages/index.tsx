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
    /* It's creating an array of random indexes. */
    const randIndexes = Array.from(
      new Set(Array.from({ length: textArr.length }, () => Math.floor(Math.random() * textArr.length)))
    )

    /* It's filtering out the indexes that are not needed. */
    const randIndexesNeedly = randIndexes.filter((num) => !randIndexes.includes(num + 1))

    randIndexesNeedly.forEach((index) => {
      if (index !== 0) {
        textArr.splice(index, 0, "дон")
      }
    })

    setKadyrovshina(textArr)
  }, [text])
  return (
    <HomeLayout>
      <Head>
        <title>Любой текст в кадыровщину</title>
      </Head>
      <Container className="flex-1 flex flex-col">
        <h1 className="text-xl">Любой текст в кадыровщину</h1>
        <div className="grid grid-cols-2 gap-4 flex-1">
          <div className="flex flex-col">
            <textarea
              className="border rounded p-4 h-full flex-1 overflow-hidden"
              name="simpletext"
              id="simpletext"
              cols={100}
              onChange={(e) => setText(e.target.value)}
            >
              {text}
            </textarea>
          </div>
          <div className="p-4 whitespace-pre-wrap">{kadyrovshina.join(" ")}</div>
        </div>
      </Container>
    </HomeLayout>
  )
}

export default Home
