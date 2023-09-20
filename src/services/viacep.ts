interface GoodZipCodeResponse {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}
interface BadZipCodeResponse {
  erro: boolean
}

type ZipCodeResponse = BadZipCodeResponse | GoodZipCodeResponse

interface GetZipCodeResult {
  address: string
  city: string
  state: string
  neighborhood: string
  complement: string
}

export default async function maybeGetZipCode(zipCode: string): Promise<null | GetZipCodeResult> {
  const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`)

  if (response.ok === false) {
    return null
  }

  const data = await response.json()

  if (data.erro) {
    return null
  }

  data as GoodZipCodeResponse

  return {
    address: data.logradouro,
    city: data.localidade,
    state: data.uf,
    neighborhood: data.bairro,
    complement: data.complemento,
  }
}
