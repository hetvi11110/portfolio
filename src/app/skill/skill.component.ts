import { Component, computed, signal } from '@angular/core';
import { SkillItemComponent } from './skill-item.component';

@Component({
  selector: 'app-skill',
  imports: [SkillItemComponent],
  templateUrl: './skill.component.html'
})
export class SkillComponent {

  title='Professional Skills';

  skills = signal([
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 75 },
    { name: 'JavaScript', percentage: 60 },
    { name: 'TypeScript', percentage: 30 },
    { name: 'Node.js', percentage: 50},
    { name: 'PHP', percentage: 75 },
    { name: 'C#', percentage:40 },
    { name: 'SQL', percentage: 90 },
  ]);

  skillPairs = computed(() => {
    const pairs = [];
    for (let i = 0; i < this.skills().length; i += 2) {
      pairs.push(this.skills().slice(i, i + 2));
    }
    return pairs;
  });
}
