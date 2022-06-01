const {
    PersonalData,
    Information,
    NotFound
} = require("../models/models")


exports.create = async (req, res) => {

    let information, notFound


    if (req.files){
        
        req.body.avatar = req.files['avatar'][0].filename

        req.body.appeal_video = req.files['appeal_video'][0].filename

    }
        const personalData = await PersonalData.create(req.body).then(data => data).catch(e => this.sendError('Dados Pessoais Incorrectos!', res))

    if (personalData) {

        req.body.personalDataId = personalData.id

        information = await Information.create(req.body).then(data => data).catch(async e => {
            
            await PersonalData.destroy({
                where: {
                    id: personalData.id
                }
            })

            this.sendError('Dados sobre informação incorrectos!', res)

        })

        if (information) {

            req.body.informationId = information.id

            notFound = await NotFound.create(req.body).then(data => data).catch(async e => {
            
                await PersonalData.destroy({
                    where: {
                        id: personalData.id
                    }
                })

                await Information.destroy({
                    where: {
                        id: information.id
                    }
                })
    
                this.sendError('Impossível Cadastrar, por favor, tente novamente!', res)
    
            })

        }
    }

    res.json({
        message: 'Post Cadastrado com sucesso!'
    });

}

exports.sendError = (sms, res) => {

    res.status(400).json({
        error: true,
        message: sms
    })

}