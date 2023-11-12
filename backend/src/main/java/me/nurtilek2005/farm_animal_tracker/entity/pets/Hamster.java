package me.nurtilek2005.farm_animal_tracker.entity.pets;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import me.nurtilek2005.farm_animal_tracker.entity.DomesticAnimal;

@Entity
@Table(name = "pets")
public class Hamster extends DomesticAnimal {

}