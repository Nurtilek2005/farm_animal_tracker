package me.nurtilek2005.farm_animal_tracker.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@DiscriminatorValue("PACK")
@Table(name = "pack_animals")
public class PackAnimal extends Animal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "type", insertable = false, updatable = false)
    private String type;

    @Column(name = "name")
    private String name;

    @Column(name = "birthDate")
    private Date birthDate;

    @Column(name = "commands")
    private String commands;
}
