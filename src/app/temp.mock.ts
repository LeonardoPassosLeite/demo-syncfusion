import { SafeHtml } from '@angular/platform-browser';

export interface Agentes {
    id: number;
    documento: string;
    rev: string;
    documentoVinculado: string;
    agentesVinculados: string | SafeHtml;
    responsavel: string;
    concessao: string;
    gm: string;
    subestacao: string;
    inicio: Date;
    termino: Date;
    resumo: string;
    comentarios: number;
    status: string;
}

export interface Status {
    id: number;
    situacao: string;
}

export const agentesMock: Agentes[] = [
    {
        id: 1,
        documento: 'AI-TAESA-659-845',
        status: 'Elaboração',
        rev: '2',
        documentoVinculado: 'NPC 26943',
        agentesVinculados: 'Eletrosul COT',
        responsavel: 'João Guilherme',
        concessao: 'Janaúba',
        gm: 'ATE',
        subestacao: 'Aymorés',
        inicio: new Date('2021-02-21'),
        termino: new Date('2023-05-23'),
        resumo: 'Obra em execução',
        comentarios: 2
    },
    {
        id: 2,
        documento: 'AI-TAESA-168-946',
        status: 'Aprovação',
        rev: '1',
        documentoVinculado: 'Sem NPC',
        agentesVinculados: 'CHESF (COOS) CHESF (CROL)',
        responsavel: 'Wanderson Cunha',
        concessao: 'Miracema',
        gm: 'EAT',
        subestacao: 'Novatrans',
        inicio: new Date('2022-02-21'),
        termino: new Date('2023-05-23'),
        resumo: 'Construção de nava LT',
        comentarios: 3
    },
    {
        id: 3,
        documento: 'AI-TAESA-365-78',
        status: 'Agendada',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: new Date('2023-02-10'),
        termino: new Date('2023-05-23'),
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 4,
        documento: 'AI-TAESA-659-845',
        status: 'Elaboração',
        rev: '2',
        documentoVinculado: 'NPC 49465',
        agentesVinculados: 'Eletrosul COT',
        responsavel: 'João Guilherme',
        concessao: 'Janaúba',
        gm: 'EDTE',
        subestacao: 'Aymorés',
        inicio: new Date('2021-02-21'),
        termino: new Date('2023-05-23'),
        resumo: 'Obra em execução',
        comentarios: 2
    },
    {
        id: 5,
        documento: 'AI-TAESA-168-74',
        status: 'Aprovação',
        rev: '2',
        documentoVinculado: 'NPC 19845',
        agentesVinculados: 'Brasnorte',
        responsavel: 'João Guilherme',
        concessao: 'Miracema',
        gm: 'ESTE',
        subestacao: 'Novatrans',
        inicio: new Date('2022-02-21'),
        termino: new Date('2023-05-23'),
        resumo: 'Construção de nava LT',
        comentarios: 3
    },
    {
        id: 6,
        documento: 'AI-TAESA-556-82',
        status: 'Agendada',
        rev: '1',
        documentoVinculado: 'NPC 99546',
        agentesVinculados: 'Eletrosul COT',
        responsavel: 'João Guilherme',
        concessao: 'Janaúba',
        gm: 'NTE',
        subestacao: 'Aymorés',
        inicio: new Date('2023-02-10'),
        termino: new Date('2023-05-23'),
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 7,
        documento: 'AI-TAESA-649-21',
        status: 'Elaboração',
        rev: '3',
        documentoVinculado: 'Sem NPC',
        agentesVinculados: 'HESF (COOS) CHESF (CROL)',
        responsavel: 'Wanderson Cunha',
        concessao: 'Ivaí',
        gm: 'ATE',
        subestacao: 'Novatrans',
        inicio: new Date('2021-02-21'),
        termino: new Date('2023-05-23'),
        resumo: 'Obra em execução',
        comentarios: 2
    },
    {
        id: 8,
        documento: 'AI-TAESA-168-946',
        status: 'Aprovação',
        rev: '1',
        documentoVinculado: 'Sem NPC',
        agentesVinculados: 'CHESF (COOS) CHESF (CROL)',
        responsavel: 'Wanderson Cunha',
        concessao: 'Miracema',
        gm: 'EAT',
        subestacao: 'Novatrans',
        inicio: new Date('2022-02-21'),
        termino: new Date('2023-05-23'),
        resumo: 'Construção de nava LT',
        comentarios: 3
    },
    {
        id: 9,
        documento: 'AI-TAESA-365-78',
        status: 'Agendada',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: new Date('2023-02-10'),
        termino: new Date('2023-05-23'),
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 10,
        documento: 'AI-TAESA-659-845',
        status: 'Elaboração',
        rev: '2',
        documentoVinculado: 'NPC 26943',
        agentesVinculados: 'Eletrosul COT',
        responsavel: 'João Guilherme',
        concessao: 'Janaúba',
        gm: 'ATE',
        subestacao: 'Aymorés',
        inicio: new Date('2021-02-21'),
        termino: new Date('2023-05-23'),
        resumo: 'Obra em execução',
        comentarios: 2
    },
    {
        id: 11,
        documento: 'AI-TAESA-168-946',
        status: 'Aprovação',
        rev: '1',
        documentoVinculado: 'Sem NPC',
        agentesVinculados: 'CHESF (COOS) CHESF (CROL)',
        responsavel: 'Wanderson Cunha',
        concessao: 'Miracema',
        gm: 'EAT',
        subestacao: 'Novatrans',
        inicio: new Date('2022-02-21'),
        termino: new Date('2023-05-23'),
        resumo: 'Construção de nava LT',
        comentarios: 3
    },
    {
        id: 12,
        documento: 'AI-TAESA-365-78',
        status: 'Agendada',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: new Date('2023-02-10'),
        termino: new Date('2023-05-23'),
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 13,
        documento: 'AI-TAESA-659-845',
        status: 'Elaboração',
        rev: '2',
        documentoVinculado: 'NPC 26943',
        agentesVinculados: 'Eletrosul COT',
        responsavel: 'João Guilherme',
        concessao: 'Janaúba',
        gm: 'ATE',
        subestacao: 'Aymorés',
        inicio: new Date('2021-02-21'),
        termino: new Date('2023-05-23'),
        resumo: 'Obra em execução',
        comentarios: 2
    },
    {
        id: 14,
        documento: 'AI-TAESA-168-946',
        status: 'Aprovação',
        rev: '1',
        documentoVinculado: 'Sem NPC',
        agentesVinculados: 'CHESF (COOS) CHESF (CROL)',
        responsavel: 'Wanderson Cunha',
        concessao: 'Miracema',
        gm: 'EAT',
        subestacao: 'Novatrans',
        inicio: new Date('2022-02-21'),
        termino: new Date('2023-05-23'),
        resumo: 'Construção de nava LT',
        comentarios: 3
    },
    {
        id: 15,
        documento: 'AI-TAESA-365-78',
        status: 'Agendada',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: new Date('2023-02-10'),
        termino: new Date('2023-05-23'),
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
];

export const statusMock: Status[] = [{
    id: 1,
    situacao: 'Agendada'
}];