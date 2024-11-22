import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import { Convidado, Evento } from 'core';

@Injectable()
export class EventoPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  salvar(evento: Evento) {
    return this.prisma.evento.create({
      data: {
        ...(evento as any),
        convidados: { create: evento.convidados },
      },
    });
  }

  salvarConvidado(evento: Evento, convidado: Convidado) {
    return this.prisma.convidado.create({
      data: {
        ...convidado,
        qtdeAcompanhantes: +(convidado.qtdeAcompanhantes ?? 0),
        evento: { connect: { id: evento.id } },
      },
    });
  }

  async buscarTodos(): Promise<Evento[]> {
    return this.prisma.evento.findMany() as any;
  }

  async buscarPorId(
    id: string,
    completo: boolean = false,
  ): Promise<Evento | null> {
    return this.prisma.evento.findUnique({
      where: { id },
      include: { convidados: completo },
    });
  }

  async buscarPorAlias(alias: string, completo: boolean = false) {
    return this.prisma.evento.findUnique({
      select: {
        id: true,
        nome: true,
        alias: true,
        descricao: true,
        data: true,
        local: true,
        imagem: true,
        imagemBackground: true,
        senha: completo,
        publicoEsperado: completo,
        convidados: completo,
      },
      where: { alias },
    });
  }
}
