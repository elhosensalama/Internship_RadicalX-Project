exports.deleteOne = Model => {
    return async (req, res, next) => {
        const document = await Model.findByIdAndDelete(req.params.id);

        if (!document) {
            return next(new AppError('No document found with that id', 404));
        }
        res.status(204).send();
    };
};

exports.updateOne = Model => {
    return async (req, res, next) => {
        const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!document) {
            return next(new AppError('No document found with that id', 404));
        }

        res.status(201).json({
            stutus: 'success',
            data: {
                document
            }
        });
    };
};

exports.createOne = Model => {
    return async (req, res, next) => {
        const document = await Model.create(req.body);

        res.status(201).json({
            stutus: 'success',
            data: {
                document
            }
        });
    };
};

exports.getOne = Model => {
    return async (req, res, next) => {
        const document = await Model.findById(req.params.id);

        if (!document) {
            return next(new AppError('No document found with that id', 404));
        }

        res.status(200).json({
            status: 'success',
            data: {
                document
            }
        });
    };
};

exports.getAll = Model => {
    return async (req, res, next) => {
        const documents = await Model.find();

        res.status(200).json({
            status: 'success',
            results: documents.length,
            data: {
                documents
            }
        });
    };
};
