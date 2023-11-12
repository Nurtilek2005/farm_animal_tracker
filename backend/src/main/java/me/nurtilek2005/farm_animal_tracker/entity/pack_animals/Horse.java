package me.nurtilek2005.farm_animal_tracker.entity.pack_animals;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import me.nurtilek2005.farm_animal_tracker.entity.PackAnimal;

@Entity
@Table(name = "pack_animals")
public final class Horse extends PackAnimal {
}
