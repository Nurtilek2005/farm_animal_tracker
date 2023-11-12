package me.nurtilek2005.farm_animal_tracker.dao;

import me.nurtilek2005.farm_animal_tracker.entity.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AnimalRepository extends JpaRepository<Animal, Long> {
    List<Animal> findAllByType(String type);
}
