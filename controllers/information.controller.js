const {
    PersonalData,
    Information,
    NotFound
} = require("../models/models")

const fs = require('fs')

exports.create = async (req, res) => {

    let information, notFound

    if (req.files) {

        if (req.files['avatar'])
            req.body.avatar = req.files['avatar'][0].filename

        if (req.files['appeal_video'])
            req.body.appeal_video = req.files['appeal_video'][0].filename

    }

    const personalData = await PersonalData.create(req.body).then(data => data).catch(e => {

        const d = e

        this.deleteFile(req, res)

        this.sendError('Dados Pessoais Incorrectos!', res)

    })

    if (personalData) {

        req.body.personalDataId = personalData.id

        information = await Information.create(req.body).then(data => data).catch(async e => {

            await PersonalData.destroy({
                where: {
                    id: personalData.id
                }
            })

            this.deleteFile(req, res)

            this.sendError('Dados sobre informação incorrectos!', res)

        })

        if (information) {

            req.body.informationId = information.id

            await NotFound.create(req.body).then(() => {

                res.json({
                    message: 'Post Cadastrado com sucesso!'
                })

            }).catch(async e => {

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

                this.deleteFile(req, res)

                this.sendError('Impossível Cadastrar, por favor, tente novamente!', res)

            })

        }
    }


}

exports.sendError = (sms, res) => {

    res.status(400).json({
        error: true,
        message: sms
    })

}

exports.deleteFile = async (req, res) => {

    if (req.body.avatar)
        await this.delete(req.body.avatar)

    if (req.body.appeal_video)
        await this.delete(req.body.appeal_video)

}

exports.delete = async (name) => {

    await fs.unlink("public/uploads/informations/" + name, (data, err) => {

        if (err) throw err;

    });
}