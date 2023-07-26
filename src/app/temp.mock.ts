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
    comentarios: string;
    status: string;
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
        termino:'23/05/2023',
        resumo:'Obra em execução',
        comentarios:'teste'
    },
    {
        id: 2,
        documento: 'AI-TAESA-168-946',
        status: 'Aprovação',
        rev: '1',
        documentoVinculado: 'Sem NPC',
        agentesVinculados: 'CHESF (COOS)',
        responsavel: 'Wanderson Cunha',
        concessao: 'Miracema',
        gm: 'EAT',
        subestacao: 'Novatrans',
        inicio: '21/02/2021',
        termino:'23/05/2023',
        resumo:'Construção de nava LT',
        comentarios:'teste'
    },
    {
        id: 3,
        documento: 'AI-TAESA-365-78',
        status: 'Agendada',
        rev: '1',
        documentoVinculado: 'Sem NPC',
        agentesVinculados: 'CHESF (COOS)',
        responsavel: 'Wanderson Cunha',
        concessao: 'Miracema',
        gm: 'EAT',
        subestacao: 'Novatrans',
        inicio: '21/02/2021',
        termino:'23/05/2023',
        resumo:'Construção de nava LT',
        comentarios:'teste'
    },
];