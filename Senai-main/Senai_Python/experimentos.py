import json

# Dados que você forneceu
dados = {
    "usuario": {
        "id": 12345,
        "nome": "João Silva",
        "email": "joao.silva@gmail.com",
        "data_nascimento": "22-03-1985",
        "endereco": {
            "rua": "Exemplo de rua",
            "numero": 123,
            "bairro": "Centro",
            "cidade": "São Paulo",
            "estado": "SP"
        },
        "interesses": ["tecnologia", "música", "viagens"],
        "ativo": True
    },
    "produtos": [
        {
            "id": 1,
            "nome": "Camiseta Estampada",
            "preco": 39.90,
            "disponivel": True
        },
        {
            "id": 2,
            "nome": "Tênis de Corrida",
            "preco": 199.99,
            "disponivel": False
        }
    ],
    "status": "sucesso",
    "mensagem": "Arquivo gerado com sucesso!"
}

# Salvando os dados em um arquivo JSON
# with open("dados.json", "w") as f:
#     json.dump(dados, f, indent=4)

# print("Arquivo JSON salvo com sucesso!")

with open("dados,json", "w") as f:
    json.dump("dades.json")
