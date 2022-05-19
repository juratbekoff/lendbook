import Lends from "../model/lends.model"
import client from './client'

async function create(brand: Lends) {
  let sql = 'INSERT INTO lendlists (name, date, lend) VALUES ($1,$2,$3)'
  await client.query(sql, [brand.name, brand.date, brand.lend])
}

async function findAll(): Promise<Lends[]> {
  let sql = 'SELECT * FROM lendlists'
  let result = await client.query(sql)
  return result.rows
}

async function remove(id: number) {
  let sql = 'DELETE FROM lendlists WHERE id=$1'
  await client.query(sql, [id])
}

async function removeAll(removeAll:Lends) {
  let sql = 'DELETE FROM lendlists'
  await client.query(sql, [removeAll])
}

async function update(id: number, brand: Lends) {
  let sql = 'UPDATE TABLE lendlists SET name=$1 WHERE id=$2'
  await client.query(sql, [brand.name, id])
}

export default {
  create, 
  findAll,
  remove,
  update,
  removeAll
}