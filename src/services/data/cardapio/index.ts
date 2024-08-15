import {api} from '../../api'

export interface IFood{
    prato?: string
    ingredientes?: string
}

export interface IResponseFood{
    id: number
    prato: string
    ingredientes: string
    create_at: string
} 

class FoodData{
    index(){
        return api.get<IResponseFood[]>('/cardapio')
    }
    store(data: IFood){
        return api.post('/cardapio', data)
    }
}

export default new FoodData()