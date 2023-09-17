import { Configuration, OpenAIApi } from "openai";
import { SUPPORTED_LAGUAGES } from "../constants";
import { type FromLanguage, type Language } from "../types.d";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY


const configuration = new Configuration({ apiKey})
const openai = new OpenAIApi(configuration)

export async function translate ({
    fromLanguage, 
    toLanguage,
    text,
}: {
    fromLanguage: FromLanguage
    toLanguage: Language
    text: string
}) {
    const messages = [
        {
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: 'You are a AI that trasnlates text. You recieve a text from the user. Do not answer, just translate the text. The original language is sorrounded by `{{` and `}}`. You can also recieve {{auto}} which means that you have to detect the language. The language you translate to is surrounded by ``[[` and `]]`.'
        }
    ]
}