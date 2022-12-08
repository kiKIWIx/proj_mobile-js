import { Text } from 'react-native'

import Estilo from './Estilo'

function Primeiro(){
  return <Text style={[Estilo.txt1, Estilo.box].join(" ")}>Primeiro</Text>
}
function Segundo(){
  return <Text style={[Estilo.txt2, Estilo.box].join(" ")}>Segundo</Text>
}
function Terceiro(){
  return <Text style={[Estilo.txt3, Estilo.box].join(" ")}>Terceiro</Text>
}

export default Primeiro
export {Segundo, Terceiro}