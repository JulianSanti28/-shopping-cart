package com.unicauca.carrito;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class CarritoApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarritoApplication.class, args);
	}
/*
	@Bean
	public Mongobee mongobee(){
		Mongobee runner = new Mongobee("mongodb://localhost:27019/market1");
		runner.setDbName("market1");         // host must be set if not set in URI
		runner.setChangeLogsScanPackage(
				"com.unicauca.carrito.changelogs"); // the package to be scanned for changesets

		return runner;
	}
*/

}
