const skills: string[] = ['Bash', 'Conunter', 'Healing'];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometwon?: string;
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter'],
};

console.log(strider);
export {};
