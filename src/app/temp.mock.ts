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
    inicio: string;
    termino: string;
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
        inicio: '21/02/2021',
        termino: '23/05/2023',
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
        inicio: '21/02/2022',
        termino: '23/05/2023',
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
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 4,
        documento: 'AI-TAESA-365-78',
        status: 'Elaboração',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 5,
        documento: 'AI-TAESA-365-78',
        status: 'Aprovação',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 6,
        documento: 'AI-TAESA-365-78',
        status: 'Agendada',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 7,
        documento: 'AI-TAESA-365-78',
        status: 'Elaboração',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 8,
        documento: 'AI-TAESA-365-78',
        status: 'Agendada',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 9,
        documento: 'AI-TAESA-365-78',
        status: 'Aprovação',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 10,
        documento: 'AI-TAESA-365-78',
        status: 'Agendada',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 11,
        documento: 'AI-TAESA-365-78',
        status: 'Elaboração',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 12,
        documento: 'AI-TAESA-365-78',
        status: 'Aprovação',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 13,
        documento: 'AI-TAESA-365-78',
        status: 'Agendada',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 14,
        documento: 'AI-TAESA-365-78',
        status: 'Elaboração',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
    {
        id: 15,
        documento: 'AI-TAESA-365-78',
        status: 'Aprovação',
        rev: '1',
        documentoVinculado: 'NPC 97614',
        agentesVinculados: 'Eletronorte',
        responsavel: 'Salem Gomes',
        concessao: 'Ivaí',
        gm: 'STC',
        subestacao: 'Aymorés',
        inicio: '21/02/2023',
        termino: '23/05/2023',
        resumo: 'Manutenção de LT',
        comentarios: 1
    },
];

export const statusMock: Status[] = [{
    id: 1,
    situacao: 'Agendada'
}];