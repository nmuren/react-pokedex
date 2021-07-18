import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";

import { readableTextFormat } from "utils/commonUtils";
import { getImageSource } from "service/pokemon";
import StatBar from "components/StatBar";
import { MainContext } from "store/MainStore";
import FavoriteIcon from "components/FavoriteIcon";

const PokemonStats = ({ pokemon = {}, pokemonVariant }) => {
  const store = useContext(MainContext);

  return (
    <Card className="w-100 mt-3 styled-card">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-end">
          <span className="text-muted text-medium mx-1 ">
            {`#${pokemon.id.toString().padStart(3, 0)}`}
          </span>
          <h4 className="mb-0 h-100 ">{readableTextFormat(pokemon.name)}</h4>
        </div>
        <FavoriteIcon
          status={store.favoritePokemons.some((item) => item.id === pokemon.id)}
          checkText="Add to favorites"
          onChecked={() => {
            const obj = {
              id: pokemon.id,
              name: pokemon.name,
            };
            store.addFavorite(obj);
          }}
          uncheckText="Remove from favorites"
          onUnchecked={() => {
            store.removeFavorite(pokemon.id);
          }}
        />
      </Card.Header>
      <Card.Body>
        <Row className="d-flex align-items-center">
          <Col sm={12} md={6} lg={4} className="d-flex justify-content-center ">
            <img
              src={getImageSource(pokemon.id)}
              alt={pokemon.name || "pokemon image"}
              height="250"
            />
          </Col>
          <Col sm={12} md={6} lg={8}>
            {pokemon.stats.map(({ base_stat, stat: { name } }) => (
              <StatBar
                value={base_stat}
                title={readableTextFormat(name)}
                key={name}
                variant={pokemonVariant}
              ></StatBar>
            ))}
            <p className="mt-3">{pokemon.flavorText}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default observer(PokemonStats);
