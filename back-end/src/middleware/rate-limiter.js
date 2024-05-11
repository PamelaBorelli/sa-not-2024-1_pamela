import { rateLimit } from 'express-rate-limit'

const rateLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // janela de 5 minutos
    max: 50, // cada IP podera fazer 50 acessos em 5 min
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Bloqueado pelo limitador de taxa de acesso',
    statusCode: 423
})

export default rateLimiter