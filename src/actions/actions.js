let ADD_REPOSITORY = 'ADD_REPOSITORY';
let addRepository = (repository) => {
    return {
        type: ADD_REPOSITORY,
        repository: repository
    };
};

let RATE_REPOSITORY = 'RATE_REPOSITORY';
let rateRepository = (repository, rating) => {
    return {
        type: RATE_REPOSITORY,
        repository: repository,
        rating: rating
    };
};

exports.ADD_REPOSITORY = ADD_REPOSITORY;
exports.addRepository = addRepository;
exports.RATE_REPOSITORY = RATE_REPOSITORY;
exports.rateRepository = rateRepository;
