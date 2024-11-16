import inquirer from "inquirer";
export const primaryPrompt = async (params) => {
    const prompt = {
        type: params.type,
        name: params.name,
        message: params.message,
        when: params.when,
        validate: params.validate,
    };
    params.when !== undefined ? (prompt.when = params.when) : "";
    params.validate !== undefined ? (prompt.validate = params.validate) : "";
    const createPrompt = inquirer.prompt([prompt]);
    return createPrompt;
};
