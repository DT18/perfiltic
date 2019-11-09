package ecommerce.repository;

import ecommerce.model.OrderProduct;
import ecommerce.model.OrderProductPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}
