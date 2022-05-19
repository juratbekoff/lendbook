import Brand from "../model/lends.model"

export default function (body: any): Brand {
  return {
    id: 0,
    name: body.name,
    date: body.date,
    lend: body.lend
  }
}


