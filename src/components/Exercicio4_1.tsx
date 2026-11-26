import { Text, View } from "react-native"

export default function Exercicio4_1(){

        return(
            <Produto 
            nome ={'Geladeira'} 
            preco={3000.50}
            emPromocao={true}/>
        )

}

type ProdutoPros = {
    nome: string,
    preco: number,
    emPromocao: boolean
}

function Produto(props: ProdutoPros){
    return(
        <View>
            <Text>Nome: {props.nome}</Text>
            <Text>Preco: R${props.preco.toFixed(2)}</Text>
            
                    {
                        props.emPromocao && <Text>Promoção de Black Friday</Text>
                    }

        </View>
    )
} 